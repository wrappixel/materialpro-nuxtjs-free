<template>
    <div class="profiletimeline position-relative">
      <div class="sl-item mt-2 mb-3">
        <div class="sl-left float-left me-3">
          <img
            src="/images/profile/1.jpg"
            width="40"
            alt="user"
            class="rounded-circle"
          />
        </div>
        <div class="sl-right">
          <div>
            <div class="d-md-flex align-items-center">
              <h3 class="text-h6">John Doe</h3>
              <div class="sl-date text-muted ms-1">5 minutes ago</div>
            </div>
  
            <p>assign a new task Design weblayout</p>
            <div class="v-row mt-3">
              <div class="v-col-lg-3 v-col-md-6 mb-3">
                <img src="/images/big/img1.jpg" width="100%" alt="user" />
              </div>
              <div class="v-col-lg-3 v-col-md-6 mb-3">
                <img src="/images/big/img2.jpg" width="100%" alt="user" />
              </div>
              <div class="v-col-lg-3 v-col-md-6 mb-3">
                <img src="/images/big/img3.jpg" width="100%" alt="user" />
              </div>
              <div class="v-col-lg-3 v-col-md-6 mb-3">
                <img src="/images/big/img4.jpg" width="100%" alt="user" />
              </div>
            </div>
            <a href="/" class="text-decoration-none mr-3 text-primary"
              ><v-icon>mdi-message</v-icon> comments</a
            >
            <a href="/" class="text-decoration-none text-error"
              ><v-icon>mdi-heart</v-icon> 5 Likes</a
            >
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="sl-item my-4 border-top pt-4">
        <div class="sl-left float-left me-3">
          <img
            src="/images/profile/2.jpg"
            width="40"
            alt="user"
            class="rounded-circle"
          />
        </div>
        <div class="sl-right">
          <div>
            <div class="d-md-flex align-items-center">
              <h3 class="text-h6">James Smith</h3>
              <div class="sl-date text-muted ms-1">5 minutes ago</div>
            </div>
            <div class="mt-3 v-row">
              <div class="v-col-md-3">
                <img
                  src="/images/big/img4.jpg"
                  class="w-100"
                  alt="user"
                />
              </div>
              <div class="v-col-md-9 mt-3 mt-md-0">
                <p class="fs-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <v-btn color="primary" variant="flat" flat class="mt-3">
                  Design weblayout</v-btn
                >
              </div>
            </div>
            <div class="text-nowrap mt-3">
              <a href="/" class="text-decoration-none mr-3 text-primary"
                ><v-icon>mdi-message</v-icon> comments</a
              >
              <a href="/" class="text-decoration-none text-error"
                ><v-icon>mdi-heart</v-icon> 5 Likes</a
              >
            </div>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="sl-item my-4 border-top pt-4">
        <div class="sl-left float-left me-3">
          <img
            src="/images/profile/3.jpg"
            width="40"
            alt="user"
            class="rounded-circle"
          />
        </div>
        <div class="sl-right">
          <div>
            <div class="d-md-flex align-items-center">
              <h3 class="text-h6">Maria Smith</h3>
              <div class="sl-date text-muted ms-1">5 minutes ago</div>
            </div>
            <p class="my-4 fs-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
              odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
              quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper
            </p>
          </div>
          <div class="text-nowrap mt-3">
            <a href="/" class="text-decoration-none mr-3 text-primary"
              ><v-icon>mdi-message</v-icon> comments</a
            >
            <a href="/" class="text-decoration-none text-error"
              ><v-icon>mdi-heart</v-icon> 5 Likes</a
            >
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="sl-item my-4 border-top pt-4">
        <div class="sl-left float-left me-3">
          <img
            src="/images/profile/4.jpg"
            width="40"
            alt="user"
            class="rounded-circle"
          />
        </div>
        <div class="sl-right">
          <div>
            <div class="d-md-flex">
              <h3 class="text-h6">john Smith</h3>
              <div class="sl-date text-muted ms-1">5 minutes ago</div>
            </div>
            <v-alert class="mt-4 fs-3" color="primary" variant="tonal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </v-alert>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="sl-item my-4 border-top pt-4">
        <div class="sl-left float-left me-3">
          <img
            src="/images/profile/1.jpg"
            width="40"
            alt="user"
            class="rounded-circle"
          />
        </div>
        <div class="sl-right">
          <div>
            <div class="d-md-flex">
              <h3 class="text-h6">john Smith</h3>
              <div class="sl-date text-muted ms-1">5 minutes ago</div>
            </div>
            <v-alert class="mt-4 fs-3" color="secondary" variant="tonal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </v-alert>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style lang="scss">
  .profiletimeline {
    position: relative;
    padding-left: 40px;
    margin: 10px 10px 0 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    .sl-item {
      margin-top: 8px;
      margin-bottom: 30px;
      display: flex;
    }
    .sl-left {
      margin-left: -60px;
      z-index: 1;
      margin-right: 15px;
    }
  }
  </style>
  