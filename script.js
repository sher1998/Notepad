function Mode()  // this function is used for mode of display.
{
    let parent = document.getElementById('container');
    let mode_icon = document.getElementById('mode-icon');
    if (parent.className === 'container') {
        parent.className = 'container night'
        document.body.style.background = '#202124';
        mode_icon.className = 'fas fa-moon'
        mode_icon.style.background = '#00002c'
        mode_icon.style.color = '#fff'
    } else {
        parent.className = 'container';
        document.body.style.background = '#fff';
        mode_icon.className = 'fas fa-sun'
        mode_icon.style.background = '#fff'
        mode_icon.style.color = '#000'
    }
}



function savenote()  //This function is used for save the notes.
{
    let feature_flag = document.getElementById('feature-flag');
    let text_content = document.getElementById('textarea').value;
    if(feature_flag.checked ==true)
    {
        setInterval(function()
        {
            localStorage.setItem("autosave-data",text_content);
        },1000);
    }
    window.onload = function savenote()
    {
        text_content=localStorage.setItem("autosave-data");
    }
}

function getnotes() //this function is used for get the save notes. 
{
    let data = localStorage.getItem("autosave-data");
    let outputbox = document.getElementById("outputbox");
    if(data==="" || data=== null)
    {
        swal("Sorry,No data found");
    }
    else
    {
        outputbox.style="block";
        let result = document.getElementById("result");
        result.innerText=`${data}`;
    }
}

function reset()
{
    let text =document.getElementById("textarea");
    text.value ="";
}

function deletenotes()  // this function is used for delete the previous notes 
{
   let data = localStorage.getItem("autosave-data");
   let outputbox = document.getElementById("outputbox");
   if(data==="" || data=== null)
   {
    swal("Nothing to be delete", "first write something and save it.");

    } else {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.removeItem('autosave-data');
                    outputbox.style.display = 'none';
                    swal("Poof! Your note has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your note is safe!");
                }
            });
    }

}