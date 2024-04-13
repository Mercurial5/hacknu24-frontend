import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  ButtonUI,
  clearTestResults,
  ProfileDataElement,
  ProfilePhotoElement,
} from "../index.js";
import { useNavigate } from "react-router-dom";

function Module({
  // store props
  user,
  // dispatch props
  clearTestResults,
}) {
  const tester = () => {
  };
  return (
    <section className="profile">
      <div className="profile__content">
        <ProfilePhotoElement />
        <ProfileDataElement
          label="Name"
          content={user.name}
        />
        <ProfileDataElement
          label="Email"
          content={user.email}
        />
        <div className="profile__buttons">
          <ButtonUI onClick={tester}>
            Edit profile
          </ButtonUI>
          <ButtonUI onClick={clearTestResults}>
            Retake test
          </ButtonUI>
          <ButtonUI onClick={clearTestResults}>
            Log out
          </ButtonUI>
          <ButtonUI
            onClick={tester}
            isDanger={true}
          >
            Delete account
          </ButtonUI>
        </div>
      </div>
      <div className="profile__test-results">
        asdadsad
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
});
const mapDispatchToProps = (dispatch) => ({
  clearTestResults: () => dispatch(clearTestResults()),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
