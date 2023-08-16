import './App.css';
import StepProgess from './components/StepProgess';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Cart from './components/cart';
import ProgressControl from './components/ProgressControl';

export default function App() {
  return (
    <main class="site-main">
      <div class="main-container">
        <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 class="register-title col col-12">結帳</h2>
          <StepProgess />
          <section class="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </section>
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}