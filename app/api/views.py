from rest_framework.response import Response
from rest_framework.decorators import api_view
from requests import get
from collections import Counter
import os
import json
from .utils import getPoeNinjaData

headers = {'User-Agent': "Mozilla/5.0"}
cookies = {'POESESSID': os.environ.get('POESESSID')}

@api_view(['GET'])
def get_characters_and_stashtabs(request):
    if request.method == 'GET':

        # if os.stat("data.json").st_size == 0:
        #     getPoeNinjaData(request)

        characters_url = "https://www.pathofexile.com/character-window/get-characters?accountName=R33son"
        stashtabs_url = "https://www.pathofexile.com/character-window/get-stash-items?league=Standard&realm=pc&accountName=R33son&tabs=1"

        res_characters = get(characters_url, headers=headers, cookies=cookies)
        res_stashtabs = get(stashtabs_url, headers=headers, cookies=cookies)

        results_characters = res_characters.json()
        results_stashtabs = res_stashtabs.json()

        characters = [
            {
                'name': character.get('name'),
                'class': character.get('class'),
                'level': character.get('level'),
                'league': character.get('league')
            }
            for character in results_characters
        ]

        stashtabs = [
            {
                "name": stashtab.get("n"), 
                "index": stashtab.get("i"), 
                "color": stashtab.get("colour")
            }
            for stashtab in results_stashtabs["tabs"]
        ]

        
        return Response({
            'characters': characters,
            'stashtabs': stashtabs
        })

@api_view(['POST'])
def get_character_items(request):
    if request.method == 'POST':
        name = request.data.get('name')
        url = f"https://www.pathofexile.com/character-window/get-items?accountName=R33son&character={name}"

        res = get(url, headers=headers, cookies=cookies)
        result = res.json()

        equipment = []
        inventory = []

        for item in result["items"]:
                if item["inventoryId"] != "Offhand2" and item["inventoryId"] != "Weapon2":

                    if item["inventoryId"] == "Flask":
                        flask_id = str(item["x"] + 1)
                    else:
                        flask_id = ""

                    fracturedMods = item.get("fracturedMods")
                    utilityMods = item.get("utilityMods")
                    implicitMods = item.get("implicitMods")
                    explicitMods = item.get("explicitMods")
                    craftedMods = item.get("craftedMods")
                    enchantMods = item.get("enchantMods")
                    corrupted = item.get("corrupted")
                    name = item.get("name")
                    height = item.get("h")
                    stackSize = item.get("stackSize")

                    i = {
                        "typeLine": item["typeLine"],
                        "icon": item["icon"],
                        "inventoryId": item["inventoryId"],
                        "flask": flask_id,
                        "fracturedMods": fracturedMods,
                        "utilityMods": utilityMods,
                        "implicitMods": implicitMods,
                        "explicitMods": explicitMods,
                        "craftedMods": craftedMods,
                        "enchantMods": enchantMods,
                        "corrupted": corrupted,
                        "name": name,
                        "frameType": item["frameType"],
                        "height": height,
                        "x": item["x"],
                        "y": item["y"],
                        "stackSize": stackSize,
                    }

                    if item["inventoryId"] == "MainInventory":
                        inventory.append(i)
                    else:
                        equipment.append(i)
                   

        return Response({'equipment': equipment, "inventory": inventory})


@api_view(['POST'])
def get_stashtab_items(request):
    if request.method == 'POST':
        tab_id = request.data.get('id')
        url = f'https://www.pathofexile.com/character-window/get-stash-items?league=Standard&realm=pc&accountName=R33son&tabs=0&tabIndex={tab_id}'

        res = get(url, headers=headers, cookies=cookies)
        result = res.json()

        count = Counter()
        stash_items = []

        for item in result["items"]:
                stackSize = None
                if "stackSize" not in item:
                    count[item["typeLine"]] += 1
                    stackSize = count[item["typeLine"]]
                else:
                    stackSize = item["stackSize"]

                name = ""
                if item["name"] != "":
                    name = item["name"]
                else:
                    name = item["baseType"]

                stash_items.append({
                    "league": item["league"],
                    "frameType": item["frameType"],
                    "quantity": stackSize,
                    "typeLine": item["typeLine"],
                    "baseType": name,
                    "icon": item["icon"],
                    "name": item["name"],
                })
        
        with open("data.json") as jsonfile:
            ninjaData = json.load(jsonfile)
        
        for idx, item in enumerate(stash_items):
            for ninjaItem in ninjaData:
                if ninjaItem["baseType"] == item["baseType"]:
                    stash_items[idx]["ninjaUrl"] = (
                        f"https://poe.ninja/{item['league'].lower()}/{ninjaItem['ninjaType']}/{ninjaItem['detailsId']}"
                    )
        
        return Response(stash_items)