import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

const LazyLayout = React.lazy(() => import("./components/Layout"));
const LazyNoMatch = React.lazy(() => import("./components/NoMatch"));

const LazyMovieListScreen = React.lazy(() =>
  import("./screens/MovieListScreen")
);
const LazyMovieDetailScreen = React.lazy(() =>
  import("./screens/MovieDetailScreen")
);

const App = () => (
  <>
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazyLayout />}>
            <Route index element={<LazyMovieListScreen />} />
            <Route path="/details/:id" element={<LazyMovieDetailScreen />} />
            <Route path="*" element={<LazyNoMatch />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </>
);

function Loading() {
  return <>Loading...</>;
}
export default App;
