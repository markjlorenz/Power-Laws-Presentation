<!SLIDE bullets incremental transition=fade>
#Ruby to the Rescue

<div class='code-block-with-sections' data-show-block='1'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#!/usr/bin/env ruby
	# pass the starting URL, in quotes, as a commandline arg
	require 'mechanize'
	starting_url = ARGV[0] 

	agent = Mechanize.new do |agent| 
		agent.follow_meta_refresh = true
		agent.max_history = 2
	end
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	#while page has a "Next" that's not disabled get it
	index_page = agent.get(starting_url)
	while !index_page.links_with(text:'Next', :href=>/.+/).empty?
		#Get index pages and add them to index_pages array
		#assign index_page to the next index page
	end
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	index_pages.each do |index_page|
		#Get the interesting info from each listing

		csv_string = CSV.generate do |csv|
			#write it to csv
		end
			
		File.open(output_file, 'a') {|f| f.write(csv_string) }
	end
</pre>
</div>


Fire-up Mechanize

<!SLIDE bullets incremental transition=fade>
#Ruby to the Rescue

<div class='code-block-with-sections' data-show-block='2'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#!/usr/bin/env ruby
	# pass the starting URL, in quotes, as a commandline arg
	require 'mechanize'
	starting_url = ARGV[0] 

	agent = Mechanize.new do |agent| 
		agent.follow_meta_refresh = true
		agent.max_history = 2
	end
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	#while page has a "Next" that's not disabled get it
	index_page = agent.get(starting_url)
	while !index_page.links_with(text:'Next', :href=>/.+/).empty?
		#Get index pages and add them to index_pages array
		#assign index_page to the next index page
	end
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	index_pages.each do |index_page|
		#Get the interesting info from each listing

		csv_string = CSV.generate do |csv|
			#write it to csv
		end
			
		File.open(output_file, 'a') {|f| f.write(csv_string) }
	end
</pre>
</div>


Crawl the 'Next' button, to grab all the index pages


<!SLIDE bullets incremental transition=fade>
#Ruby to the Rescue

<div class='code-block-with-sections' data-show-block='3'>
<pre data-block-name='1' class="sh_ruby sh_sourceCode">
	#!/usr/bin/env ruby
	# pass the starting URL, in quotes, as a commandline arg
	require 'mechanize'
	starting_url = ARGV[0] 

	agent = Mechanize.new do |agent| 
		agent.follow_meta_refresh = true
		agent.max_history = 2
	end
</pre>
<pre data-block-name='2' class="sh_ruby sh_sourceCode">
	#while page has a "Next" that's not disabled get it
	index_page = agent.get(starting_url)
	while !index_page.links_with(text:'Next', :href=>/.+/).empty?
		#Get index pages and add them to index_pages array
		#assign index_page to the next index page
	end
</pre>
<pre data-block-name='3' class="sh_ruby sh_sourceCode">
	index_pages.each do |index_page|
		#Get the interesting info from each listing

		csv_string = CSV.generate do |csv|
			#write it to csv
		end
			
		File.open(output_file, 'a') {|f| f.write(csv_string) }
	end
</pre>
</div>


Get what we need and get out, FAST!

