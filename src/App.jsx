import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div><p className="topline">OPEN SOURCE STUDIO · WEEK 11</p><h1>Next Steps</h1><p className="subtitle">React Component, Props & State assignment</p></div>
        <span className="tag">what do you learn?</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>OSS Week 11 · React</span><span>Local state only · Refresh resets data</span></footer>
    </main>
  );
}
