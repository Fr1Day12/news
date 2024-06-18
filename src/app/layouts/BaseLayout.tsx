import { useTheme } from "@/app/providers/ThemeProvider";
import Page from "@/pages/Main/ui/Page";
import Header from "@/widgets/header/ui/Header/Header";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Page />
      </div>
    </div>
  );
}

export default BaseLayout;
