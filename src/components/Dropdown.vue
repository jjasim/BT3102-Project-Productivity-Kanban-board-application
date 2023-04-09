<template>
    <div class="btn-group">
      <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
          {{ selectedOption.name }}
          <span class="caret"></span>
        </li>

        <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption.name === undefined">
            <span class="sidebar-projectstext">Team Projects</span>
          <span class="caret"></span>
        </li>

        <ul class="dropdown-menu" v-if="showMenu">
            <li v-for="(option, idx) in options" :key="idx">
                <a class="sidebar-proj" @click="updateOption(option)">
                    <router-link to="/tasks">
                    {{ option.name }}
                    </router-link>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                selectedOption: {
                  name: '',
                },
                showMenu: false,
                selectedTab: '',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            closeOnOutsideClick: {
              type: [Boolean],
              default: true,
            },
        },
        mounted() {
            this.selectedOption = this.selected;
            if (this.closeOnOutsideClick) {
              document.addEventListener('click', this.clickHandler);
            }
        },

        beforeDestroy() {
            document.removeEventListener('click', this.clickHandler);
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
              this.showMenu = !this.showMenu;
            },

            clickHandler(event) {
                const { target } = event;
                const { $el } = this;

                if (!$el.contains(target)) {
                  this.showMenu = false;
                }
            },

            navigateToTab() {
              // Use Vue Router to navigate to the selected tab based on the value
              switch (this.selectedTab) {
                case 'tab1':
                  this.$router.push('/proj1');
                  break;
                case 'tab2':
                  this.$router.push('/proj2');
                  break;
                case 'tab3':
                  this.$router.push('/proj3');
                  break;
                default:
                  this.$router.push('/home'); // Navigate to default route when no tab is selected
                  break;
              }
            },
        }
    }
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  * {
    font-family: 'Josefin Sans', sans-serif;
  }

.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-top: 5%;
}
.btn-group a:hover {
  text-decoration: none;
}

.dropdown-toggle {
  color:  rgb(255, 255, 255, 1);
  padding: 10px;
  text-transform: none;
  background-image: linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: opacity 0s ease-out;
  float: none;
  box-shadow: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 25px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  margin-left: 1%;
}
.dropdown-toggle:hover {
  background: #e1e1e1;
  height:auto;
  cursor: pointer;
}

.dropdown-menu {
  position: relative;
  left: 0;
  align-self: center;
  float: left;
  width: 100%;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
  text-decoration: none;
}

.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color:  #5E72EB;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: black;
  text-decoration: none;
}

.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}

.caret {
  width: 0;
  position: absolute;
  top: 19px;
  height: 0;
  margin-left: -24px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  right: 10px;
}

li {
    list-style: none;
}

.sidebar-proj {
    color: #5E72EB;
    height: auto;
    align-self: auto;
    box-sizing: border-box;
    flex-shrink: 1;
    font-size: 20px;
    text-decoration: none;
  }

  .sidebar-projectstext {
    color: rgba(255, 255, 255, 1);
    height: auto;
    font-size: 25px;
    font-style: Regular;
    text-align: left;
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    margin-left: 1%;
  }
</style>