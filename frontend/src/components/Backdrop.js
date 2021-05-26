import './Backdrop.css'

const Backdrop = ({ show, clickHandler }) => {
  return show && <div className='backdrop' onClick={clickHandler}></div>
}

export default Backdrop
