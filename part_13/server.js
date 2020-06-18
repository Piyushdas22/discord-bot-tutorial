let countChannel = {
  total: "723144037657215027",
  member: "723144251684290583",
  bots: "723144363533795389",
  serverID: "712505384929198100"
} 
// Replace ID with the channel ID and server ID (for serverID)
// Follow the instructions: https://youtu.be/UmY0Gsx3KlI?t=44

// We're gonna doing the same thing if member/bot left the server.
client.on("guildMemberAdd", member => {
  if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.
  
  client.channels.cache.get(countChannel.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(countChannel.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(countChannel.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on("guildMemberRemove", member => {
  if (member.guild.id !== countChannel.serverID) return;
  
  client.channels.cache.get(countChannel.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(countChannel.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(countChannel.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
