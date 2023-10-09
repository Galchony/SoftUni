function lockedProfile() {
    let profiles = document.querySelectorAll('div.profile');
    let profilesArr = Array.from(profiles);
    for (const profile of profilesArr) {
        let btn = profile.querySelector('button');
        btn.addEventListener('click', () => {
            let lock = profile.querySelector('input[value="lock"]');
            if (!lock.checked) {
                let div = profile.querySelector('div');
                if(div.style.display === 'inline') {
                    div.style.display = 'none';
                    btn.textContent = 'Show more';
                } else {
                    div.style.display = 'inline';
                    btn.textContent = 'Hide it';
                }
            }
        })
    }
   
}