import {supabase} from "../auth/supabaseClient";


// Activate RLS

const tableName = 'player';

class Player {

    constructor(name = null, supabaseUserId = null, id = null) {
        this.id = id;
        this.name = name;
        this.supabaseUserId = supabaseUserId;
    }

    async save() {
        const { data } = await supabase
            .from(tableName)
            .upsert(
                { name: this.name, supabase_user_id: this.supabaseUserId},
                { onConflict: 'supabase_user_id' },
            )
            .select().limit(1).single();
        if (data) {
            this.id = data.id;
        }
    }

    getId() {
        return this.id;
    }
}

export {Player};