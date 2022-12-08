import {supabase} from "../auth/supabaseClient";


const tableName = 'game';

class Game {

    constructor(teamId, id = null, createdAt = null) {
        this.id = id;
        this.createdAt = createdAt;
        this.team = teamId;
    }

    static async create(teamId) {
        const { data, error } = await supabase
            .from(tableName)
            .insert({ team: teamId})
            .select().limit(1).single();
        if (data) {
            return new Game(teamId, data.id, data.created_at);
        } else {
            return error;
        }
    }
}

export {Game};