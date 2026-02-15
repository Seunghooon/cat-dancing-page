import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">
          <span className="title-icon">&#128049;</span>
          Dancing Cat
          <span className="title-icon">&#128049;</span>
        </h1>
        <p className="subtitle">Click the controls to make the cat dance!</p>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>Made with &#10084;&#65039; and React</p>
      </footer>
    </div>
  );
}
