
let cl = console.log

cl("plik ze skryptem działa")

// +++++++++++++++++++++++++++++++++++++++++++++++++++
const v = document.querySelector('.search-bar > input')
v.addEventListener('focus', (e)=>{
  e.target.value=""
})
// MODAL ****************************************************** modal MODAL 

const modal = document.querySelector('.modal')
const bkg = document.querySelector('.modal-background')
const mClose = document.querySelector('.modal-button')
const cardDel = document.querySelector('.modal-card-head .delete')
const footBtn = document.querySelector('.modal-card-foot .button')
const logo = document.querySelector('.logo')
const deleteModal = [bkg,cardDel,footBtn,mClose]

window.onload = (event) => {
  modal.classList.toggle('is-active')
  //-------------------------------------------
  deleteModal.forEach((el)=>{
    el.addEventListener('click',()=>{
      modal.classList.remove('is-active');
      logo.classList.toggle('animate__animated')
      logo.classList.toggle('animate__tada')
    })
  })
 
}