document.querySelectorAll('.header__selection-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.header__selection-item').forEach(i => i.classList.remove('header__selection-item--active'));
        item.classList.add('header__selection-item--active');
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('content-section--active'));
        document.getElementById(item.getAttribute('data-section')).classList.add('content-section--active');
    });
});


document.querySelector('.barbutton').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('sidebar--expanded');
    
    
    content.style.marginLeft = sidebar.classList.contains('sidebar--expanded') ? '240px' : '72px';
});

document.addEventListener('click', (e) => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const profileButton = document.querySelector('.header__profile');
    
    if (!profileButton.contains(e.target)) {
        profileDropdown.style.display = 'none';
    }
});

document.querySelector('.header__profile').addEventListener('click', (e) => {
    const dropdown = e.currentTarget.querySelector('.profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    e.stopPropagation();
});