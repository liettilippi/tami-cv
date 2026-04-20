function switchTab(name, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panels > div').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('tab-' + name).classList.add('active');
}