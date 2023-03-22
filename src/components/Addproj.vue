<template>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header">
            <span class="addproject-popuptitle"><slot name="header">
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
        <span class="addproject-details">
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
    justify-content: center;
    align-items: flex-start;
    align-self: auto;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
    position: relative;
  }


  .modal-footer {
    border-top: 1px solid rgba(94, 114, 235, 1);
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: rgba(94, 114, 235, 1);
    background: transparent;
    float: right;
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

  .addproject-popuptitle {
  color: rgba(0, 0, 0, 1);
  width: 596px;
  height: auto;
  font-size: 50px;
align-self: auto;
font-style: Regular;
text-align: left;
font-family: Yeseva One;
font-weight: 400;
line-height: normal;
font-stretch: normal;
text-decoration: none;
}
  
  .addproject-details {
    position: relative;
    padding: 20px 10px;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
border-color: transparent;
border-style: none;
border-width: 0;
margin-right: 0;
border-radius: 0px 0px 0px 0px;
margin-bottom: 0;
justify-content: flex-start;
background-color: transparent;
}

.addproject-projtitle {
    width: 625px;
  height: 107px;  
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  background-color: transparent;
}

.addproject-projtitletext {
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.addproject-userstitle {
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.addproject-inputbg {
width: 347px;
height: 42px;
position: absolute;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}

.addproject-adduser {
top: 50px;
left: 0px;
width: 625px;
height: 107px;
padding: 0;
position: absolute;
align-self: auto;
box-sizing: border-box;
align-items: flex-start;
flex-shrink: 1;
border-color: transparent;
border-style: none;
border-width: 0;
border-radius: 0px 0px 0px 0px;
display: flex;
justify-content: space-around;
flex-direction: column;
background-color: transparent;
}

.addproject-edit {
top: 373px;
left: 579px;
width: 75px;
height: 24px;
padding: 0;
position: absolute;
align-self: auto;
box-sizing: border-box;
align-items: flex-start;
flex-shrink: 1;
border-color: transparent;
border-style: none;
border-width: 0;
margin-right: 0;
border-radius: 0px 0px 0px 0px;
margin-bottom: 0;
display: flex;
justify-content: flex-start;
flex-direction: column;
background-color: rgba(94, 114, 235, 1);
}

.addproject-addtext {
top: 5px;
left: 13px;
color: rgba(255, 255, 255, 1);
width: 49px;
height: auto;
position: absolute;
font-size: 18px;
align-self: auto;
font-style: Regular;
text-align: center;
font-family: Josefin Sans;
font-weight: 400;
line-height: normal;
font-stretch: normal;
text-decoration: none;
}

</style>