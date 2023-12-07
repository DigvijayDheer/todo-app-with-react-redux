// Importing React library for creating React components
import React from "react";

// Importing Toaster component from 'react-hot-toast' library for displaying toast notifications
import { Toaster } from "react-hot-toast";

// Importing styles module for the app component
import styles from "./styles/modules/app.module.scss";

import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

// Defining the main App component
function App() {
  return (
    <>
      {/* Container for the entire app */}
      <div className="container">
        {/* Page title component */}
        <PageTitle>TODO App</PageTitle>

        {/* Wrapper for the main app content */}
        <div className={styles.app__wrapper}>
          {/* Header component */}
          <AppHeader />

          {/* Main content component */}
          <AppContent />
        </div>
      </div>

      {/* Toaster component for displaying toast notifications */}
      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

// Exporting the App component as the default export
export default App;
