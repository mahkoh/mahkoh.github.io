(function() {var implementors = {};
implementors['comm'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/arc/struct.Arc.html' title='comm::arc::Arc'>Arc</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/arc/struct.Weak.html' title='comm::arc::Weak'>Weak</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;Trait: ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/arc/struct.ArcTrait.html' title='comm::arc::ArcTrait'>ArcTrait</a>&lt;Trait&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;Trait: ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/arc/struct.WeakTrait.html' title='comm::arc::WeakTrait'>WeakTrait</a>&lt;Trait&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/select/struct.WaitQueue.html' title='comm::select::WaitQueue'>WaitQueue</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/one_space/struct.Producer.html' title='comm::spsc::one_space::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/one_space/struct.Consumer.html' title='comm::spsc::one_space::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/bounded/struct.Producer.html' title='comm::spsc::bounded::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/bounded/struct.Consumer.html' title='comm::spsc::bounded::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/ring_buf/struct.Producer.html' title='comm::spsc::ring_buf::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/ring_buf/struct.Consumer.html' title='comm::spsc::ring_buf::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/unbounded/struct.Producer.html' title='comm::spsc::unbounded::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spsc/unbounded/struct.Consumer.html' title='comm::spsc::unbounded::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spmc/unbounded/struct.Producer.html' title='comm::spmc::unbounded::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spmc/unbounded/struct.Consumer.html' title='comm::spmc::unbounded::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spmc/bounded_fast/struct.Producer.html' title='comm::spmc::bounded_fast::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/spmc/bounded_fast/struct.Consumer.html' title='comm::spmc::bounded_fast::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/mpsc/unbounded/struct.Producer.html' title='comm::mpsc::unbounded::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/mpsc/unbounded/struct.Consumer.html' title='comm::mpsc::unbounded::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/mpsc/bounded_fast/struct.Producer.html' title='comm::mpsc::bounded_fast::Producer'>Producer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/mpsc/bounded_fast/struct.Consumer.html' title='comm::mpsc::bounded_fast::Consumer'>Consumer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='comm/mpmc/bounded/struct.Channel.html' title='comm::mpmc::bounded::Channel'>Channel</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
