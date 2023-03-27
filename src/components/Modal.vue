<template>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header">
            <span class="modal-popuptitle"><slot name="header">
          This is the default title!
        </slot></span>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <span class="modal-details">
        <slot name="body">
          This is the default body!
        </slot>
        </span>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
      </footer>
    </div>
  </div>
</transition> 
</template>
        
<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    border-color: rgba(0, 0, 0, 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 22px;    
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    position: fixed;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: auto;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .modal-header {
  padding: 15px;
    display: flex;
    width: 93%;
  }

  .modal-footer {
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px;
    display: flex;
    width: 93%;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px ;
    width: auto;
    width: 90%;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: rgba(94, 114, 235, 1);
    background: transparent;
    border-radius: 22px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .modal-popuptitle {
  color: rgba(0, 0, 0, 1);
  padding: 2%;
  height: auto;
  width: 100%;
  font-size: 50px;
  font-style: Regular;
  text-align: left;
  font-family: Yeseva One;
  font-weight: 400;
  }
  
  .modal-details {
    position: relative;
    padding: 20px 10px;
    align-self: auto;
    box-sizing: border-box;
    flex-shrink: 1;
    width: auto;
  }

.addproject-addprojtitle {
  height: auto;  
  padding: 3%;
}

.addproject-adduser {
width: auto;
padding: 3%;
}

.addproject-projtitletext {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 25px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  padding: 1%;
}

.addproject-userstext {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 25px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  padding: 1%;
}

.addproject-currentusers {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 17px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  padding-top: 1%;
}
.addproject-addeduserstext {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  padding-top: 3%;
}

.addproject-inputbg {
width: 347px;
height: 42px;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}

.addproject-pushbuttons{
  height: auto;
  padding-top: 1%;
  padding-left: 67%;
}

.addproject-addbutton {
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  border: none;
  cursor: pointer;
  background: transparent;  
  border-radius: 22px;
  padding: 3%;
background-color: rgba(94, 114, 235, 1);
}

.addproj-adduser-btn {
  color: rgba(94, 114, 235, 1);
  width: auto;
  height: auto;
  font-size: 18px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  border: none;
  cursor: pointer;
  background: transparent;  
  padding-top: 1%;
  padding-left: 67%;
}

</style>