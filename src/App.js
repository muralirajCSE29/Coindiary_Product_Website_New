import { Route, router, Routes } from "react-router-dom";

import "./App.css";

import AllComps from "./AllComps";

import EmailBuissness from "./EmailBuissness";

import ForgotPasswordDiary from "./Forgotpassworddiary";
import CreateaccountDiary from "./CreateaccountDiary";
import DiaryComponent from "./Diarycom";
import SigninDiary from "./signindiary";
import BasicInfonewCoindiary from "./BasicInfonewCoindiary";
import CoindiarynewLogin from "./CoindiarynewLogin";
import BasicInfoBio from "./BasicInfoBio";
import NetworkInformation from "./NetworkInformation";
import TeamCollaborators from "./TeamCollaborators";
import OfficialLinks from "./OfficialLinks";
import WelcometoCoindiary from "./WelcometoCoindiary";
import AllCompsTwt from "./AllCompsTwt";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllComps />} />

        <Route path="/creatediary" element={<DiaryComponent />} />
        <Route path="/confirmemail" element={<EmailBuissness />} />
        <Route path="/signindiary" element={<SigninDiary />} />
        <Route path="/signindiary" element={<SigninDiary />} />
        <Route path="/forgotpassworddiary" element={<ForgotPasswordDiary />} />
        <Route path="/createaccountdiary" element={<CreateaccountDiary />} />
        <Route path="/coindiarylogin" element={<CoindiarynewLogin />} />
        <Route path="/basicInfo" element={<BasicInfonewCoindiary />} />
        <Route path="/basicInfobio" element={<BasicInfoBio />} />
        <Route path="/networkinformation" element={<NetworkInformation />} />
        <Route path="/teamcolloborators" element={<TeamCollaborators />} />
        <Route path="/officiallinks" element={<OfficialLinks />} />
        <Route path="/welcometocoindiary" element={<WelcometoCoindiary />} />
        {/* <Route path="/allcompstwt" element={<AllCompsTwt />} /> */}
      </Routes>
    </div>
  );
}

export default App;
