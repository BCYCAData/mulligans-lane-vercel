import { writable } from 'svelte/store';
import supabaseConnection from '$lib/dbClient';

export const user = writable(supabaseConnection.auth.user());
