import supabase from '../auth/supabaseClient';

const tableName = 'playlist';

export default class Playlist {
  constructor(playerId, songs, gameId, createdAt = null, id = null) {
    this.id = id;
    this.createdAt = createdAt;
    this.player = playerId;
    this.songs = songs;
    this.gameId = gameId;
  }

  async save() {
    const { data } = await supabase
      .from(tableName)
      .insert({ player: this.player, songs: this.songs, game: this.gameId })
      .select()
      .limit(1)
      .single();
    if (data) {
      this.id = data.id;
      this.createdAt = data.created_at;
    }
  }
}
