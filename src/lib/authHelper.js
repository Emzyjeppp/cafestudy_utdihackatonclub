import { supabase } from './supabaseClient.js';

// Auto run auth check on load
document.addEventListener('DOMContentLoaded', () => {
    initAuthUI();
});

export async function initAuthUI() {
    const authContainer = document.getElementById('nav-auth-section');
    if (!authContainer) return;

    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
        // User logged in
        const user = session.user;
        const fullName = user.user_metadata?.full_name || user.email.split('@')[0];
        const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

        authContainer.innerHTML = `
            <div class="relative group">
                <button class="w-10 h-10 bg-primary-container text-on-primary-container font-extrabold rounded-full flex items-center justify-center text-sm shadow-md active:scale-95 transition-all focus-visible:outline" aria-label="User profile options">
                    ${initials}
                </button>
                <!-- Dropdown -->
                <div class="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant/30 rounded-2xl shadow-lg py-2 hidden group-hover:block hover:block z-50">
                    <span class="block px-4 py-2 text-xs font-bold text-on-surface-variant border-b border-outline-variant/10">Hi, ${fullName}!</span>
                    <button id="btn-logout" class="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-semibold transition-all">Keluar (Sign Out)</button>
                </div>
            </div>
        `;

        document.getElementById('btn-logout')?.addEventListener('click', async () => {
            await supabase.auth.signOut();
            window.location.reload();
        });
    } else {
        // User guest
        authContainer.innerHTML = `
            <a class="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold focus-visible:outline" href="login.html">
                Sign In
            </a>
        `;
    }
}
