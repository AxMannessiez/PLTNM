import {supabase} from "../auth/supabaseClient";


// Activate RLS

class Player {

    constructor(name = null, supabase_user_id = null, id = null,) {
        this.id = id;
        this.name = name;
        this.supabase_user_id = supabase_user_id;
    }

    async save() {
        await supabase
            .from('player')
            .upsert(
                { name: this.name, supabase_user_id: this.supabase_user_id},
                { onConflict: 'supabase_user_id' },
            )
        //const { data, error } = await supabase.from('player').select()
    }
}

export {Player};