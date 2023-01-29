import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./pages/main/Main";
import Nav01 from "./components/layout/navigation/Nav01";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Header category={<Nav01 />} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>

          {/* <Route path="point" element={<PointLayout />}>
              <Route index element={<Point />} />
            </Route>
            <Route path="qna" element={<QnaLayout />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            

            <Route path="mypage/*" element={<MypageLayout />}>
              <Route index element={<MyInfo />} />
              <Route path="edit" element={<MyEdit />} />
              <Route path="editpw" element={<MyEditpw />} />
              <Route path="like" element={<MyLike />} />
              <Route path="post" element={<MyPost />} />
              <Route path="qna" element={<MyQna />} /> 
            </Route>*/}
        </Routes>
        {/* <Footer /> */}
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
