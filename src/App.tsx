import "./css/template.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <div className="angle_container">
            <div className="angle"></div>
            <div className="angle"></div>
            <div className="angle"></div>
            <div className="angle"></div>
          </div>
        </div>
        <div className="menu">
          <a href="#" className="menu_item">
            Главная
          </a>
          <a href="#" className="menu_item">
            Технология
          </a>
          <a href="#" className="menu_item">
            График полётов
          </a>
          <a href="#" className="menu_item">
            Гарантии
          </a>
          <a href="#" className="menu_item">
            О компании
          </a>
          <a href="#" className="menu_item">
            Контакты
          </a>
        </div>
      </div>
      <button className="button">
        <div className="angle"></div>
        Начать путешествие
        <div className="angle"></div>
      </button>
      <div className="text"></div>
      <div className="line_container">
        <div className="point"></div>
        <div className="horizontal_line"></div>
        <div className="inclined_line"></div>
      </div>
      <div className="benefit_container">
        <div className="benefit_item">
          <p className="benefit_text">
            мы <span className="benefit_number">1</span> на рынке
          </p>
        </div>
        <div className="benefit_item">
          <p className="benefit_text">
            гарантируем <span className="benefit_number">50%</span> безопасность
          </p>
        </div>
        <div className="benefit_item">
          <p className="benefit_text">
            календарик за <span className="benefit_number">2001г.</span> в
            подарок
          </p>
        </div>
        <div className="benefit_item">
          <p className="benefit_text">
            путешествие <span className="benefit_number">597</span> дней
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
