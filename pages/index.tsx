import styles from '../styles/Home.module.css'
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { counterValue, decrement, increment, incrementByAmount, decreamentByAmount } from '../redux/counterSlice';
import { changeColor } from '../redux/colorSlice';
import StyledButton from '../components/Button';

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  const count = useSelector(counterValue);
  const color = useSelector((state: RootState) => state.color.color);
  const dispatch = useDispatch()
  const changeBGColor = (event: any) => {
    dispatch(changeColor(event.target.value));
  }

  return (
    <div className={styles.container}>
      <h1>Adding Redux in Next app</h1>
      <p style={{backgroundColor: `${color}`}} className='stateP'>
        This background is state dependent. 
        The count is: <span>{count}</span>
      </p>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      
      <StyledButton name='+' onclick= {() => dispatch(increment())}/>
      <StyledButton name='-' onclick= {() => dispatch(decrement())}/>
      
      <button onClick={() => dispatch(incrementByAmount(5))}>Increasement by 5</button>
      <button onClick={() => dispatch(decreamentByAmount(5))}>Decreament by 5</button>
      <div className='colorChangeDiv'>
        <label htmlFor='colorChange'>Change Background Color: </label>
        <input type='color' id='colorChange' onChange={event => changeBGColor(event)}/>
      </div>
    </div>
  )
}
