#! /usr/bin/env ruby

#Usage: powerranking.rb infile outfile
#adjust ::Keys if needed
#Negative ranking change means that the member became less popular, except for the last time period, where negative ranking change means it became more popular across the entire time span

require 'csv'

FileToRank = ARGV[0]
OutputFile = ARGV[1]
Keys = %w(time rank name value) #set keys == headers in the csv file.  Order is important

#turn an array of rows and an array of header titles into an array of hashes with headers title as keys
#output `rows` like: [{time:1990, rank:1, name:'New York City', value:8000000}, {time:1990, rank:2, name:'Los Angeles', value:4000000}]
a = File.readlines(FileToRank).map{|m|Keys.zip(m.split(',').map{|m|m.strip})}
rows =  a.map{|hashparams| Hash[hashparams]}

#get lists of unique members(cities) and time_steps(years)
members = rows.map{|r| r['name']}.uniq
time_steps = rows.map{|r| r['time']}.uniq

#sort the rows into a nested hash of time_step and member name
hash = {}
time_steps.each do |ts|
	hash[ts] = {}
  members.each do |member|
		hash[ts][member] = {}
		rows.each do |row|
			if row['time'] == ts && row['name'] == member
				hash[ts][member] = row
			end
		end
  end
end

#build the desired output, calculating rank change between each successive time step
did_not_exist_rank = rows.map{|r|r['rank']}.uniq.size+1 #what rank value to use for unranked memebers
time_steps.each_index do |i|
  members.each do |member|
		row =  hash[time_steps[i]][member]
		row["rank_change"] = row.fetch("rank"){did_not_exist_rank}.to_i - hash[(time_steps[(i+1)%time_steps.size])][member].fetch("rank"){did_not_exist_rank}.to_i
		row["rank"] ||= row.fetch("rank"){did_not_exist_rank} #use did_not_exist_rank for members that didn't exist in the source  
		row["name"] ||= member 
  end
end

CSV.open(OutputFile, "w") do |csv|
	time_steps.each do |ts|
		rows = hash[ts].values
		rows.each do |row|
			csv << (Keys.map{|key| row[key] }<<row["rank_change"])
		end
	end
end
