<template>
  <div class="container">
    <h1>Random Password/UUID Generator</h1>
    <h2>create strong password for your online account.</h2>
    <p class="refresh">
      <a href="/"><i class="fas fa-fw fa-sync-alt"></i></a>
    </p>
    <dl>
      <dt><i class="fas fa-key"></i> UUID v4</dt>
      <dd>
        <div>
          <span class="label-36">36</span>
          <password-text :use-uuid="true" />
          <password-text :use-uuid="true" />
        </div>
        <div>
          <span class="label-36">36</span>
          <password-text :use-uuid="true" />
          <password-text :use-uuid="true" />
        </div>
      </dd>
      <dt><i class="fas fa-key"></i> abc ABC 123</dt>
      <dd>
        <div
          v-for="item in settings"
          :key="item"
        >
          <span :class="'label-'+item">{{ item }}</span>
          <password-text
            :numbers="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
        </div>
      </dd>
      <dt><i class="fas fa-key"></i> abc ABC 123 @%=#</dt>
      <dd>
        <div
          v-for="item in settings"
          :key="item"
        >
          <span :class="'label-'+item">{{ item }}</span>
          <password-text
            :numbers="true"
            :symbols="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :symbols="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :symbols="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :symbols="true"
            :lowercase="true"
            :uppercase="true"
            :length="item"
          />
        </div>
      </dd>
      <dt><i class="fas fa-key"></i> abc 123</dt>
      <dd>
        <div
          v-for="item in settings"
          :key="item"
        >
          <span :class="'label-'+item">{{ item }}</span>
          <password-text
            :numbers="true"
            :lowercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="true"
            :length="item"
          />
        </div>
      </dd>
      <dt><i class="fas fa-key"></i> 123</dt>
      <dd>
        <div
          v-for="item in settings"
          :key="item"
        >
          <span :class="'label-'+item">{{ item }}</span>
          <password-text
            :numbers="true"
            :lowercase="false"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="false"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="false"
            :length="item"
          />
          <password-text
            :numbers="true"
            :lowercase="false"
            :length="item"
          />
        </div>
      </dd>
    </dl>
    <div class="copyright">
      <p>
        <a class="url" href="//password.2dev.today">//password.2dev.today</a>
      </p>
      <p>
        <a class="author" href="https://github.com/guanting112"><i class="fab fa-github-square"></i></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settings: [6, 8, 12, 16, 24, 32]
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  padding-top: 4em;
  padding-bottom: 4em;

  padding-left: 1em;
  padding-right: 1em;
}

.refresh {
  padding: 0.5em 0;
  margin-bottom: 1em;

  a {
    color: white;
    font-size: 32px;

    padding: 0.125em;
    border: 1px solid #e91e63;
    background-color: #e91e63;
    border-radius: 50%;
  }
}

h1 {
  font-size: 48px;
  margin-bottom: 0.125em;
}

h2 {
  font-size: 18px;
  margin-bottom: 0.5em;
}

dl {
  > dt {
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: black;
    padding: 0.5em 1em;
  }

  > dd {
    > div {
      span[class^=label] {
        display: inline-block;
        font-size: 20px;
        color: white;
        border-radius: 3px;

        width: 2em;
        text-align: center;
        padding: 0.25em;

        &.label-6 {
          background-color: fade-out(#49599a, 0.4);
        }

        &.label-8 {
          background-color: fade-out(#49599a, 0.4);
        }

        &.label-12 {
          background-color: fade-out(#3f51b5, 0.4);
        }

        &.label-16 {
          background-color: fade-out(#3949ab, 0.2);
        }

        &.label-24 {
          background-color: fade-out(#3949ab, 0.2);
        }

        &.label-32, &.label-36 {
          background-color: #283593;
        }
      }

      padding: 0.5em 0;
      border-bottom: 1px dashed fade-out(gray, 0.5);

      &:last-child {
        border-width: 0 !important;
      }
    }
  }
}

.copyright {
  margin-top: 6em;
  text-align: center;

  a.url, a.author {
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }

  a.author {
    font-size: 48px;
  }
}
</style>
