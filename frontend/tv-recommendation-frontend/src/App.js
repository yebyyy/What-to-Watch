import React from 'react';
import './styles/App.css'; // Custom styles for additional tweaks (if needed)
import Drama from './components/Drama';
import Comedy from './components/Comedy';
import ForYou from './components/ForYou';
function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-between items-center p-4">
        <h1 className="font-patrick text-5xl font-bold">What to watch?</h1>
        <nav>
          <a href="#" className="text-primary hover:underline">Log in</a>
          <a href="#" className="ml-4 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:bg-secondary/80">Sign up</a>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-10">
        <h2 className="text-4xl font-extrabold text-center">Discover Your Next Favorite Show</h2>
        <p className="mt-4 text-muted-foreground text-center">
          Explore a curated list of shows across various genres.
        </p>

        {/* For You Carousel */}
        <div className="mt-8 w-full max-w-6xl">
          <h3 className="text-2xl font-semibold">For You</h3>
          <ForYou />
        </div>

        <div className="mt-8 w-full max-w-6xl">
          <h3 className="text-2xl font-semibold">Comedy</h3>
          <Comedy />
        </div>
        
        <div className="mt-8 w-full max-w-6xl">
          <h3 className="text-2xl font-semibold">Drama</h3>
          <Drama />
        </div>

        <div className="mt-8">
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;