import { useState, useEffect } from 'react';

const ClearResults = () => {
//   const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const newContainer = document.createElement('div');
    // newContainer.id = 'container';
    // document.body.appendChild(newContainer);
    // setContainer(newContainer);

    const newLoading = document.createElement('div');
    newLoading.id = 'loading';
    document.body.appendChild(newLoading);
    setLoading(true);

    const newError = document.createElement('div');
    newError.id = 'error';
    document.body.appendChild(newError);
    setError(null);

    return () => {
    //   newContainer.remove();
      newLoading.remove();
      newError.remove();
    };
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div id="container" />
    </>
  );
};

export default ClearResults;