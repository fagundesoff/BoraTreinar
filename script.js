document.addEventListener('DOMContentLoaded', function() {
    const currentMonthEl = document.getElementById('currentMonth');
    const calendarDaysEl = document.getElementById('calendarDays');
    const taskDateInput = document.getElementById('taskDate');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const tasksList = document.getElementById('tasksList');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    displayCalendar(currentMonth, currentYear);

    function displayCalendar(month, year) {
        currentMonthEl.textContent = `${getMonthName(month)} ${year}`;
        calendarDaysEl.innerHTML = '';

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = '';
            calendarDaysEl.appendChild(dayEl);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = i;
            dayEl.addEventListener('click', () => selectDate(dayEl, i, month, year));
            calendarDaysEl.appendChild(dayEl);
        }
    }

    function getMonthName(month) {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return months[month];
    }

    function selectDate(dayEl, day, month, year) {
        // Adicionar funcionalidade de seleção da data aqui
        taskDateInput.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskDate = taskDateInput.value;
        const taskDescription = taskDescriptionInput.value;

        if (taskDate && taskDescription) {
            const taskEl = document.createElement('div');
            taskEl.className = 'task';
            taskEl.innerHTML = `<span>${taskDate} - ${taskDescription}</span>`;
            tasksList.appendChild(taskEl);

            taskDateInput.value = '';
            taskDescriptionInput.value = '';
        } else {
            alert('Por favor, preencha a data e a descrição da tarefa.');
        }
    });
});
