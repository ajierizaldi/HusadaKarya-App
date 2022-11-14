const port = process.env.PORT || 3000;

const funDelete = () => {
    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            model.classList.add('active');
            setTimeout(() => {
                model.classList.remove('opacity');
            }, 100);
            console.log(e.target.dataset.id);
            const id = e.target.dataset.id;
            const res = await fetch(`http://localhost:${port}/api/deleteMed/${id}`, {
            });
        })
    })
}

funDelete();