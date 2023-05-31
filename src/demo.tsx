import React ,{useState,useEffect}from 'react'
function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('this is effect');
    }, 1000)
    // 这里return 一个回调函数，在函数中清除副作用
    return () => {
      clearInterval(timer);
      console.log('销毁')
    }
  })
  return (
    <div>Test</div>
  )
}
export default function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag ? <Test/> : null}
      <div>
        <button onClick={() => setFlag(!flag)}>点击</button>
      </div>
    </div>
  )
}
