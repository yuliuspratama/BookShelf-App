const book = [];
const Tampil = 'Tampil';

function GenID() {
    return +new Date();
  }
  function GenData(id,title,author,year,isCompleted) {
    return{
      id,
      title,
      author,
      year,
      isCompleted
    }
  }

  function Containerdata(Gendata1) {
    const {id,title,author,year,isCompleted} = Gendata1

    const Judultext = document.createElement('h3');
    Judultext.innerText = title;

    const Penulistext = document.createElement('p');
    Penulistext.innerText = author;

    const Tahuntext = document.createElement('p');
    Tahuntext.innerText = year;

    const Gabungtext = document.createElement('article');
    Gabungtext.classList.add('book_item');
    Gabungtext.append(Judultext,Penulistext,Tahuntext)
    Gabungtext.setAttribute('id', `${id}`)

    const Tombol = document.createElement('div');
    Tombol.classList.add('action');
    // Tombol.append(Gabungtext);
    // Tombol.setAttribute('id', `${id}`)

    if (isCompleted) {
        const Tombolselesai = document.createElement('button')
        Tombolselesai.classList.add('green')
        Tombolselesai.innerText = "selesai di Baca";
        Tombolselesai.addEventListener('click',function(){
                // fungsi
                
        })
        Tombol.append(Tombolselesai);
        Gabungtext.append(Tombol);
    } else {
        const TombolBelum = document.createElement('button')
        TombolBelum.classList.add('green');
        TombolBelum.innerText = "Belum selesai di Baca";
        TombolBelum.addEventListener('click',function(){
                // fungsi
                
        })

        Tombol.append(TombolBelum);
        Gabungtext.append(Tombol);
    }
    const TombolBuang = document.createElement('button')
    TombolBuang.classList.add('red');
    TombolBuang.innerText = "Hapus buku";
    TombolBuang.addEventListener('click',function(){
            //fungsi
    })
    Tombol.append(TombolBuang)
    Gabungtext.append(Tombol)
    return Gabungtext;
  }

  function inputdata() {
    const textJudul = document.getElementById('inputBookTitle').value; 
    const textPenulis = document.getElementById('inputBookAuthor').value;
    const textTahun = document.getElementById('inputBookYear').value;
    const GenID1 = GenID();
    
    const ItemData = GenData(GenID1,textJudul,textPenulis,textTahun);
    book.push(ItemData);
    document.dispatchEvent(new Event(Tampil));
  }




document.addEventListener('DOMContentLoaded',function(){
    const submit = document.getElementById('bookSubmit');
    submit.addEventListener('click',function(evet){
    evet.preventDefault();
    inputdata();
    });
  });

document.addEventListener(Tampil,function(){

    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');
    // alert("masuk");
    for (const Databook of book){
        const Elementbook = Containerdata(Databook);
        incompleteBookshelfList.append(Elementbook);
    }
})
