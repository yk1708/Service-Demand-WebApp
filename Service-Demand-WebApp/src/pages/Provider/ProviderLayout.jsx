import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <div>
      <h1>Provider Section</h1>
      <Outlet /> {/* Nested provider pages will render here */}
    </div>
  );
};

export default ProviderLayout;
