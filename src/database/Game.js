import {supabase} from "../auth/supabaseClient";


const tableName = 'game';

class Game {

    constructor(team, id = null, createdAt = null) {
        this.id = id;
        this.createdAt = createdAt;
        this.team = team;
    }

    static async create(team) {
        const { data, error } = await supabase
            .from(tableName)
            .insert({ team: team})
            .select().limit(1).single();
        if (data) {
            return new Game(team, data.created_at, data.id);
        } else {
            return error;
        }
    }
}

export {Game};