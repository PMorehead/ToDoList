$(document).ready(function () {

    var createTask = function () {
        $.ajax({
            type: 'POST',
            url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1157',
            dataType: 'json',
            data: JSON.stringify({
                task: {
                    content: $('#new-task-content').val()
                }
            }),
            success: function (response, textStatus) {
                console.log(response);
            },
            error: function (request, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }

    $.ajax({
        type: 'GET',
        url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1157',
        dataType: 'json',
        success: function (response, textStatus) {
            response.tasks.forEach(function (task) {
                $('#todo-list').append('<p>' + task.content + '</p>');
            })
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });

    $('#create-task').on('submit', function (e) {
        e.preventDefault();
        createTask();
    })
    
});

