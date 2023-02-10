# 10-Feb-2023: BUFFER FIX

<pre>
    fixed issue with buffer, where when I visit buffer first time, it starts with 300px scroll or something like that.

    code added:

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
</pre>

# 19-Jan-2023

independent.ie almost done
