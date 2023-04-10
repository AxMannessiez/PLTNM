import Player from './Player';
import supabase from '../auth/supabaseClient';

const tableName = 'team';
const playerTeamRelTableName = 'player_team';

export default class Team {
  constructor(name = null, id = null, createdAt = null) {
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
  }

  static async create(name = null) {
    const { data, error } = await supabase
      .from(tableName)
      .insert({ name: name ?? '' })
      .select()
      .limit(1)
      .single();
    if (data) {
      return new Team(data.name, data.id, data.created_at);
    }
    return error;
  }

  async addPlayer(playerId) {
    const { error } = await supabase
      .from(playerTeamRelTableName)
      .upsert({ player: playerId, team: this.id });
    return error;
  }

  static async getTeam(teamId) {
    const { data, error } = await supabase
      .from(tableName)
      .select()
      .eq('id', teamId)
      .single();
    if (data) {
      return new Team(data.name, teamId, data.created_at);
    }
    return error;
  }

  async getPlayers() {
    const { data, error } = await supabase
      .from(playerTeamRelTableName)
      .select(
        `
          player ( 
            id, 
            name,
            picture
          )
        `
      )
      .eq('team', this.id);
    if (data) {
      return data.map(
        rel => new Player(rel.player.name, rel.player.picture, rel.player.id)
      );
    }
    return error;
  }
}
