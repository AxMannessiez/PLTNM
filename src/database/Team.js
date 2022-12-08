import {supabase} from "../auth/supabaseClient";


const tableName = 'team';
const playerTeamRelTableName = 'player_team';

class Team {

    constructor(name = null, id = null, createdAt = null) {
        this.id = id;
        this.createdAt = createdAt;
        this.name = name;
    }

    static async create(name = null) {
        const { data, error } = await supabase
            .from(tableName)
            .insert({ name: name ?? ''})
            .select().limit(1).single();
        if (data) {
            return new Team(data.name, data.id, data.created_at);
        } else {
            return error;
        }
    }

    async addPlayer(playerId) {
        const { error } = await supabase
            .from(playerTeamRelTableName)
            .upsert({ player: playerId, team: this.id })
        return error;
    }
}

export {Team};