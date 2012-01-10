<!SLIDE bullets incremental transition=fade>
#Calculating Ranking Change

<div class='code-block-with-sections' data-show-block='1'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#! /usr/bin/env ruby
	#Usage: powerranking.rb infile outfile
	#adjust ::Keys if needed

	FileToRank = ARGV[0]
	OutputFile = ARGV[1]
	Keys = %w(time rank name value) #set keys == headers from infile.
	r = # read lines from cvs file into an array
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	cities = rows.map{|r| r['name']}.uniq
	years = rows.map{|r| r['time']}.uniq

	hash = # a nested hash of year and then city
	did_not_exist_rank = rows.map{|r|r['rank']}.uniq.size+1
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	years.each_index do |i|
		cities.each do |city|
			row =  #get the row so we can add our rank change to it
			row["rank_change"] = #rank change in this year interval
				#if the city fell off the bottom use 101 as the new ranking

			#include cities that didn't rank in the top 100 that year
			row["rank"] ||= row.fetch("rank"){did_not_exist_rank}
			row["name"] ||= city 
		end
	end

	CSV.open(OutputFile, "w"){|csv| #output results}
</pre>
</div>

<!SLIDE bullets incremental transition=fade>
#Calculating Ranking Change

<div class='code-block-with-sections' data-show-block='2'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#! /usr/bin/env ruby
	#Usage: powerranking.rb infile outfile
	#adjust ::Keys if needed

	FileToRank = ARGV[0]
	OutputFile = ARGV[1]
	Keys = %w(time rank name value) #set keys == headers from infile.
	r = # read lines from cvs file into an array
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	cities = rows.map{|r| r['name']}.uniq
	years = rows.map{|r| r['time']}.uniq

	hash = # a nested hash of year and then city
	did_not_exist_rank = rows.map{|r|r['rank']}.uniq.size+1
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	years.each_index do |i|
		cities.each do |city|
			row =  #get the row so we can add our rank change to it
			row["rank_change"] = #rank change in this year interval
				#if the city fell off the bottom use 101 as the new ranking

			#include cities that didn't rank in the top 100 that year
			row["rank"] ||= row.fetch("rank"){did_not_exist_rank}
			row["name"] ||= city 
		end
	end

	CSV.open(OutputFile, "w"){|csv| #output results}
</pre>
</div>

<!SLIDE bullets incremental transition=fade>
#Calculating Ranking Change

<div class='code-block-with-sections' data-show-block='3'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#! /usr/bin/env ruby
	#Usage: powerranking.rb infile outfile
	#adjust ::Keys if needed

	FileToRank = ARGV[0]
	OutputFile = ARGV[1]
	Keys = %w(time rank name value) #set keys == headers from infile.
	r = # read lines from cvs file into an array
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	cities = rows.map{|r| r['name']}.uniq
	years = rows.map{|r| r['time']}.uniq

	hash = # a nested hash of year and then city
	did_not_exist_rank = rows.map{|r|r['rank']}.uniq.size+1
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	years.each_index do |i|
		cities.each do |city|
			row =  #get the row so we can add our rank change to it
			row["rank_change"] = #rank change in this year interval
				#if the city fell off the bottom use 101 as the new ranking

			#include cities that didn't rank in the top 100 that year
			row["rank"] ||= row.fetch("rank"){did_not_exist_rank}
			row["name"] ||= city 
		end
	end

	CSV.open(OutputFile, "w"){|csv| #output results}
</pre>
</div>
