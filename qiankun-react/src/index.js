import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export async function bootstrap() {

}
export async function mount(props) {
  render();
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
