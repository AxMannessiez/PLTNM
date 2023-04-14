import supabase from '../auth/supabaseClient';

// Activate RLS

const tableName = 'player';

export default class Player {
  constructor(name = null, picture = null, supabaseUserId = null, id = null) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.supabaseUserId = supabaseUserId;
  }

  async save() {
    const { data } = await supabase
      .from(tableName)
      .upsert(
        {
          name: this.name,
          supabase_user: this.supabaseUserId,
          picture: this.picture,
        },
        { onConflict: 'supabase_user' }
      )
      .select()
      .limit(1)
      .single();
    if (data) {
      this.id = data.id;
    }
  }
}
