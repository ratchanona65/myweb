document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.feedback-container input[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault();
        var comment = document.querySelector('.inputComment').value.trim();
        var name = document.querySelector('.inputName').value.trim();
        
        if (comment) {
            var thankYouMessage = "Thank you";
            if (name) {
                thankYouMessage += ", " + name;
            }
            thankYouMessage += "!";
            
            // แสดงข้อความใน Modal
            document.querySelector('.modal-page h2').textContent = thankYouMessage;
            
            // แสดง Modal
            document.getElementById('thankYouModal').style.display = 'flex';
        } else {
            alert("Please enter a comment.");
        }
    });

    
});


function closeModal() {
    document.getElementById('thankYouModal').style.display = 'none';
    document.querySelector('.inputComment').value = '';
    document.querySelector('.inputName').value = '';
}