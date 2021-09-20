import React from 'react'
import LoadingCircle from '../LoadingCircle'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StashTab from './StashTab'
import StashItem from './StashItem'
import { getStashtabItems } from '../../state/action-creators/Actions'

const Stash = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(state => state.charsAndTabs.stashTabs);
  const isLoadingTabs = useSelector(state => state.charsAndTabs.isLoading);
  const items = useSelector(state => state.stash.items);
  const isLoadingItems = useSelector(state => state.stash.isLoading);
  const [chosen, setChosen] = useState();

  const onClick = (idx) => {
    if(idx !== chosen) {
      setChosen(idx);
      dispatch(getStashtabItems(idx));
    }
  }

  const style1 = {
    marginLeft: "440px",
    marginTop: "21px",
  }

  const style2= {
    marginLeft: "380px",
    marginTop: "230px",
  }

  return (
    <div className="stashtabContainer window-bg">
      <h2 className="title m-0">STASH TABS</h2>
      <div className="inner ic">
        <div className="scrollbar">
          {isLoadingTabs ? 
            <div style={style1}>
              <LoadingCircle size={50} thickness={3.6} />
            </div>
            :
            tabs.map((tab, idx) =>
            <StashTab stashtab={tab} key={idx} onClick={onClick} active={idx === chosen} />
            )
          }
        </div>
        <div className="stashTabDetail">
          <div className="tags">
              <div className="icon">
                  <h2>Icon</h2>
              </div>
              <div className="name">
                  <h2>Name</h2>
              </div>
              <div className="quantity">
                  <h2>Quantity</h2>
              </div>
          </div>
          <div className="stashContent" id="stashContent">
            {isLoadingItems ?
              <div style={style2}>
                <LoadingCircle size={150} thickness={2} />
              </div>
              :
              items.map((item, idx) => <StashItem item={item} key={idx} />)
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Stash
