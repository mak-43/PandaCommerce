const h2 = document.getElementsByTagName('h2')

for(let h of h2){
    h.style.color='lightblue'
}

const bpId=document.getElementById('backpack')
bpId.style.backgroundColor='tomato'


document.getElementById('print').addEventListener('click',function(){
    let v =document.getElementById('print')
    const p=v.innerText
    console.log(p)
})