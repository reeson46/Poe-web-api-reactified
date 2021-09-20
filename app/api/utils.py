from urllib.parse import parse_qs, urlparse
from requests import get
import json

def amendSentence(string):
    string = list(string)
    newstring = ""
    # Traverse the string
    for i in range(len(string)):

        # Convert to lowercase if its
        # an uppercase character
        if string[i] >= "A" and string[i] <= "Z":
            string[i] = chr(ord(string[i]) + 32)

            # Print - before it
            # if its an uppercase character
            if i != 0:
                newstring += "-"

            # Print the character
            newstring += string[i]

        # if lowercase character
        # then just print
        else:
            newstring += string[i]

    return newstring


def getPoeNinjaData(request):

    Currency_url = (
        f"https://poe.ninja/api/data/currencyoverview?league=Standard&type=Currency"
    )
    Fragment_url = (
        f"https://poe.ninja/api/data/currencyoverview?league=Standard&type=Fragment"
    )
    Oils_url = f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Oil"
    Incubators_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Incubator"
    )
    Scarabs_url = f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Scarab"
    Fossils_url = f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Fossil"
    Resonators_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Resonator"
    )
    Essence_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Essence"
    )
    DivinationCards_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=DivinationCard"
    )
    Prophecies_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Prophecy"
    )
    SkillGems_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=SkillGem"
    )
    BaseTypes_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=BaseType"
    )
    UniqueMaps_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueMap"
    )
    Maps_url = f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Map"
    UniqueJewels_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueJewel"
    )
    UniqueFlasks_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueFlask"
    )
    UniqueWeapons_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueWeapon"
    )
    UniqueArmours_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueArmour"
    )
    UniqueAccessories_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=UniqueAccessory"
    )
    Beasts_url = f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Beast"
    Invitations_utl = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Invitation"
    )
    DeliriumOrb_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=DeliriumOrb"
    )
    Watchstone_url = (
        f"https://poe.ninja/api/data/itemoverview?league=Standard&type=Watchstone"
    )

    currencyUrl_list = [Currency_url, Fragment_url]

    itemsUrl_list = [
        Oils_url,
        Incubators_url,
        Scarabs_url,
        Fossils_url,
        Resonators_url,
        Essence_url,
        DivinationCards_url,
        Prophecies_url,
        SkillGems_url,
        UniqueMaps_url,
        Maps_url,
        UniqueJewels_url,
        UniqueFlasks_url,
        UniqueWeapons_url,
        UniqueArmours_url,
        UniqueAccessories_url,
        Beasts_url,
        Invitations_utl,
        DeliriumOrb_url,
        Watchstone_url,
    ]

    poeNinjaData = []

    for idx, url in enumerate(currencyUrl_list):
        qs = urlparse(url)

        if parse_qs(qs.query)["type"][0] != "Currency":
            ninjaType = amendSentence(parse_qs(qs.query)["type"][0]) + "s"
        else:
            ninjaType = amendSentence(parse_qs(qs.query)["type"][0])

        r = get(url)
        result = r.json()

        items = [
            {
                "baseType": item["currencyTypeName"],
                "detailsId": item["detailsId"],
                "ninjaType": ninjaType,
            }
            for item in result["lines"]
        ]

        poeNinjaData.extend(items)

    for url in itemsUrl_list:
        qs = urlparse(url)
        ninjaType = amendSentence(parse_qs(qs.query)["type"][0]) + "s"

        r = get(url)
        result = r.json()

        items = []

        for item in result["lines"]:
            name = ""
            if item["name"] != "":
                name = item["name"]
            else:
                name = item["baseType"]

            items.append(
                {
                    "baseType": name,
                    "detailsId": item["detailsId"],
                    "ninjaType": ninjaType,
                }
            )

        poeNinjaData.extend(items)

    with open("data.json", "w") as jsonfile:
        json.dump(poeNinjaData, jsonfile)