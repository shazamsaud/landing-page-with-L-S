import React from 'react'
import './TeacherProfile.css'

function TeacherProfile() {
  return (
    <section className="profile-section profile-main-section">
        <div className="profile-grid profile-grid-cols-1 profile-gap-6 profile-lg:grid-cols-2 profile-mb-6">
          <div className="profile-card">
            <header className="profile-card-header">
              <p className="profile-card-header-title">
                <span className="profile-icon"><i className="profile-mdi profile-mdi-account-circle"></i></span>
                Edit Profile
              </p>
            </header>
            <div className="profile-card-content">
              <form>
                <div className="profile-field">
                  <label className="profile-label">Avatar</label>
                  <div className="profile-field-body">
                    <div className="profile-field profile-file">
                      <label className="profile-upload profile-control">
                        <a href="/" className="button profile-blue"> Upload </a>
                        <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="profile-field">
                  <label className="profile-label">Name</label>
                  <div className="profile-field-body">
                    <div className="profile-field">
                      <div className="profile-control">
                        <input
                          type="text"
                          autoComplete="on"
                          name="name"
                          
                          className="input"
                          required
                        />
                      </div>
                      <p className="profile-help">Required. Your name</p>
                    </div>
                  </div>
                </div>
                <div className="profile-field">
                  <label className="profile-label">E-mail</label>
                  <div className="profile-field-body">
                    <div className="profile-field">
                      <div className="profile-control">
                        <input
                          type="email"
                          autoComplete="on"
                          name="email"
                          
                          className="input"
                          required
                        />
                      </div>
                      <p className="profile-help">Required. Your e-mail</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="profile-field">
                  <div className="profile-control">
                    <button type="submit" className="button green">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="profile-card">
            <header className="profile-card-header">
              <p className="profile-card-header-title">
                <span className="icon"><i className="mdi mdi-account"></i></span>
                Profile
              </p>
            </header>
            <div className="profile-card-content">
              <div className="image profile-w-48 profile-h-48 profile-mx-auto">
                <img
                  src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                  alt="John Doe"
                  className="rounded-full"
                />
              </div>
              <hr />
              <div className="profile-field">
                <label className="profile-label">Name</label>
                <div className="profile-control">
                  <input
                    type="text"
                    readOnly
                    
                    className="input is-static"
                  />
                </div>
              </div>
              <hr />
              <div className="profile-field">
                <label className="profile-label">E-mail</label>
                <div className="profile-control">
                  <input
                    type="text"
                    readOnly
                    
                    className="input is-static"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <header className="profile-card-header">
            <p className="profile-card-header-title">
              <span className="icon"><i className="mdi mdi-lock"></i></span> Change
              Password
            </p>
          </header>
          <div className="profile-card-content">
            <form>
              <div className="profile-field">
                <label className="profile-label">Current password</label>
                <div className="profile-control">
                  <input
                    type="password"
                    name="password_current"
                    autoComplete="current-password"
                    className="input"
                    required
                  />
                </div>
                <p className="profile-help">Required. Your current password</p>
              </div>
              <hr />
              <div className="profile-field">
                <label className="profile-label">New password</label>
                <div className="profile-control">
                  <input
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    className="input"
                    required
                  />
                </div>
                <p className="profile-help">Required. New password</p>
              </div>
              <div className="profile-field">
                <label className="profile-label">Confirm password</label>
                <div className="profile-control">
                  <input
                    type="password"
                    autoComplete="new-password"
                    name="password_confirmation"
                    className="input"
                    required
                  />
                </div>
                <p className="profile-help">Required. New password one more time</p>
              </div>
              <hr />
              <div className="profile-field">
                <div className="profile-control">
                  <button type="submit" className="button green">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default TeacherProfile
