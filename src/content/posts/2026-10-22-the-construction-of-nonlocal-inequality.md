---
title: Constructing Inequalities for Network Nonlocality
category: research
date: 2026-10-22
status: exploring
---
# 网络非局域性不等式的构造

## 一、四问题分析框架

我认为所有不等式的构造都是在回答以下四个问题：

1. **如何选择关联项？** 为什么选择这些关联项，选择的依据是什么？
2. **如何组合关联项？** 为什么采用特定的系数、幂次或非线性形式？这样的组合有什么作用？
3. **如何利用网络约束？** 网络中的源独立性、测量结构等约束，具体怎样进入不等式？
4. **如何证明构造有效？** 是否得到紧经典界和量子违反？是否具有不同的检测能力？

重点是理解**关联项的选择原则和组合依据**，而不仅仅是记录最终的不等式。

同时区分作者在原文中明确说明的构造动机，以及我根据数学推导总结出的构造思想。

---

## 1. Bilocal versus nonbilocal correlations in entanglement-swapping experiments

**Branciard et al., Physical Review A 85, 032119 (2012)**

论文：https://arxiv.org/abs/1112.4502

### 网络场景

Bilocal 网络：Alice–Bob–Charlie，由两个独立源组成。

经典模型满足

$$
p(\lambda_1,\lambda_2)
=p(\lambda_1)p(\lambda_2).
$$

### 测量设置

Alice 和 Charlie 各有两个二值测量。

Bob 分别考虑：

- **2–2：** 两个二值测量。
- **1–4：** 单次四输出测量。
- **1–3：** 单次三输出测量。

### 不等式

以 2–2 场景为例，定义

$$
I=\langle A_+B_0C_+\rangle,
\qquad
J=\langle A_-B_1C_-\rangle,
$$

其中

$$
A_\pm=\frac{A_0\pm A_1}{2},
\qquad
C_\pm=\frac{C_0\pm C_1}{2}.
$$

得到

$$
\boxed{\sqrt{|I|}+\sqrt{|J|}\le1.}
$$

1–4 和 1–3 场景也构造了相应的平方根型 bilocal 不等式，其中 Bob 的有效关联定义需要根据输出结构调整。

### 四问题分析

#### ① 如何选择关联项？

这一点原文有明确说明，见 Section III.A.2。

作者最初的目标是寻找对噪声具有较强鲁棒性的纠缠交换量子关联。他们首先通过数值方法寻找适合的测量设置，随后发现所得量子关联具有特定的对称性。

**这些对称性启发了作者对 \(I,J\) 的定义。**

因此，作者并不是先任意写出两个关联项，再观察是否能够证明不等式，而是受希望检测的量子关联及其对称性启发。

从数学结构来看，

$$
I=\langle A_+B_0C_+\rangle
$$

提取两端测量的对称组合，而

$$
J=\langle A_-B_1C_-\rangle
$$

提取反对称组合。

这使 \(I,J\) 能够共同利用两端测量之间的约束。

**我的理解：** 作者先利用目标量子关联的对称性确定值得研究的关联项，再寻找这些关联项在 bilocal 经典模型中必须满足的约束。

#### ② 如何组合关联项？

作者采用

$$
\mathcal S=\sqrt{|I|}+\sqrt{|J|}.
$$

为什么是平方根？

由经典 bilocal 模型，可以分别得到

$$
|I|\le\alpha_+\gamma_+,
\qquad
|J|\le\alpha_-\gamma_-,
$$

其中 \(\alpha_\pm,\gamma_\pm\) 是两个独立源对应的非负参数。

如果直接相加，只能得到

$$
|I|+|J|
\le\alpha_+\gamma_++\alpha_-\gamma_-.
$$

但采用平方根后，可以利用 Cauchy–Schwarz：

$$
\begin{aligned}
\sqrt{|I|}+\sqrt{|J|}
&\le\sqrt{\alpha_+\gamma_+}
+\sqrt{\alpha_-\gamma_-}\\
&\le
\sqrt{(\alpha_++\alpha_-)
(\gamma_++\gamma_-)}.
\end{aligned}
$$

这样，原本混合在一起的两个独立源参数，被转化为分别属于 Alice 和 Charlie 的约束。

因此，**平方根形式的关键作用，是将两个独立源产生的乘积约束组合成一个可以统一求界的表达式。**

#### ③ 如何利用网络约束？

这一步需要看源独立性到底在哪里发挥作用。

在经典模型中，Alice 的条件平均响应记为

$$
a_x(\lambda_1)\in[-1,1],
$$

Charlie 的条件平均响应记为

$$
c_z(\lambda_2)\in[-1,1].
$$

定义

$$
a_\pm(\lambda_1)
=\frac{a_0(\lambda_1)\pm a_1(\lambda_1)}2,
$$

$$
c_\pm(\lambda_2)
=\frac{c_0(\lambda_2)\pm c_1(\lambda_2)}2.
$$

由于 Bob 的条件平均响应满足 \(|b_y|\le1\)，并且两个源相互独立，有

$$
\begin{aligned}
|I|
&\le
\int d\lambda_1\,p(\lambda_1)|a_+(\lambda_1)|\\
&\qquad\times
\int d\lambda_2\,p(\lambda_2)|c_+(\lambda_2)|\\
&=\alpha_+\gamma_+.
\end{aligned}
$$

同理，

$$
|J|\le\alpha_-\gamma_-.
$$

**源独立性在这里使两个端点的积分能够分解。** 如果两个源允许任意相关，就不能进行这一乘积分解。

另一方面，对于任意经典二值响应，

$$
|a_+|+|a_-|
=\max\{|a_0|,|a_1|\}\le1.
$$

因此，

$$
\alpha_++\alpha_-\le1.
$$

Charlie 同样满足

$$
\gamma_++\gamma_-\le1.
$$

代入问题②中的组合不等式，

$$
\begin{aligned}
\sqrt{|I|}+\sqrt{|J|}
&\le
\sqrt{(\alpha_++\alpha_-)
(\gamma_++\gamma_-)}\\
&\le1.
\end{aligned}
$$

由此得到 bilocal 不等式。

**这里实际上同时利用了两种约束：**

- 源独立性：使关联项具有乘积上界；
- 端点响应关系：使对称和反对称组合的贡献不能同时任意增大。

平方根与求和的组合使这两种约束可以共同发挥作用。

#### ④ 如何证明构造有效？

**经典方面：**

作者不仅证明了

$$
\sqrt{|I|}+\sqrt{|J|}\le1,
$$

还构造了显式 bilocal 分解，证明在所考虑的 \((I,J)\) 投影空间中，该不等式是紧的。

需要注意，这不意味着一个不等式就能够完整刻画所有 bilocal 关联。

**量子方面：**

对于两对独立 singlet 态和适当的纠缠交换测量策略，可以得到

$$
I=J=\frac12.
$$

因此

$$
\mathcal S_Q=\sqrt2>1.
$$

说明量子关联能够违反经典 bilocal 约束。

进一步考虑白噪声时，对于论文研究的特定纠缠交换关联族，

$$
I=J=\frac V2.
$$

于是

$$
\mathcal S(V)=\sqrt{2V}.
$$

非 bilocal 违反条件为

$$
\boxed{V>\frac12.}
$$

作者还通过经典分解证明，该阈值对于所讨论的关联族是最优的。

因此，这种构造确实能够在标准 Bell 非局域性判据尚不能检测到违反的某些情况下，揭示源独立性下的非经典关联。

### 构造思想总结

这篇工作的构造过程可以理解为：

**寻找具有特定性质的量子关联 → 利用对称性选择关联项 → 通过平方根组合适配独立源乘积结构 → 推导紧 bilocal 约束并验证量子违反。**

最值得注意的是，关联项 \(I,J\) 的选择与量子关联的对称性有关，而平方根组合使经典源独立性和端点响应约束得到显化。

这也提示我们：分析其他不等式时，不能只看作者用了什么数学不等式证明经典界，还需要回到最初的关联项选择过程，理解作者为什么认为这种组合值得研究。
---

## 2. Nonlocal correlations in the star-network configuration

**Tavakoli et al., Physical Review A 90, 062109 (2014)**

论文：https://arxiv.org/abs/1409.5702

### 网络场景

Star 网络：由 $n$ 个独立源连接 $n$ 个边缘方 $A_1,\ldots,A_n$ 和中央节点 Bob。

经典模型满足 $n$-local 分解：

$$
\begin{aligned}
&p(\mathbf a,b|\mathbf x,y)\\
&=\int\prod_{i=1}^n
\left[
d\lambda_i\,p_i(\lambda_i)
p(a_i|x_i,\lambda_i)
\right]
p(b|y,\lambda_1,\ldots,\lambda_n).
\end{aligned}
$$

其中源独立性体现为

$$
p(\lambda_1,\ldots,\lambda_n)
=\prod_{i=1}^n p_i(\lambda_i).
$$

Bob 可以同时依赖所有隐变量，但每个边缘方只能依赖对应独立源。

### 测量设置

每个边缘方均有两个二值测量：

$$
x_i\in\{0,1\},\qquad a_i\in\{0,1\}.
$$

Bob 考虑两类配置：

- **第一类：** Bob 具有两个二值测量 $B_0,B_1$。
- **第二类：** Bob 进行单次联合测量。在量子实现中，采用具有 $2^n$ 个原始结果的广义 Bell 测量，再通过 classical post-processing 构造 $2^{n-1}$ 个有效二值输出 $B^j$。

第二类的 $B^j$ 来自同一次测量的不同输出赋值，不是 Bob 独立选择的多个测量。形式上，经典不等式也适用于一般的 $2^{n-1}$-bit 联合输出。

### 不等式

**第一类：两个二值测量**

定义

$$
A_{i,\pm}=\frac{A_{i,0}\pm A_{i,1}}2,
$$

$$
I=\left\langle B_0\prod_{i=1}^n A_{i,+}\right\rangle,
\qquad
J=\left\langle B_1\prod_{i=1}^n A_{i,-}\right\rangle.
$$

得到

$$
\boxed{|I|^{1/n}+|J|^{1/n}\le1.}
$$

**第二类：单次广义 Bell 测量**

定义 $2^{n-1}$ 个关联项：

$$
I_j=\frac1{2^n}
\sum_{\mathbf x}
(-1)^{g_j(\mathbf x)}
\left\langle
B^j\prod_{i=1}^n A_{i,x_i}
\right\rangle.
$$

其中 $g_j$ 取所有包含偶数个输入变量的线性函数，求和按模 2 理解。

例如，当 $n=3$ 时：

$$
\begin{aligned}
g_1&=0,\\
g_2&=x_1+x_2,\\
g_3&=x_1+x_3,\\
g_4&=x_2+x_3.
\end{aligned}
$$

得到

$$
\boxed{
\sum_{j=1}^{2^{n-1}}|I_j|^{1/n}
\le2^{n-2}.
}
$$

### 四问题分析

#### ① 如何选择关联项？

这篇论文有两种不同的构造思路，需要分别理解。

**第一类：从已有 bilocal 不等式出发进行推广。**

作者将 Branciard et al. (2012) 的关联项直接推广到 $n$ 个独立源：

$$
I=\left\langle B_0\prod_i A_{i,+}\right\rangle,
\qquad
J=\left\langle B_1\prod_i A_{i,-}\right\rangle.
$$

即保留所有边缘方的对称组合与反对称组合。

这里的选择依据主要是已有 bilocal 结构与 Star 网络拓扑，而不是从某个特定量子态的关联出发重新寻找不等式。

**第二类：从 GHZ paradox 和 Stabilizer 关联出发。**

这一构造动机是作者在原文 Section II.B 和 III.B 中明确指出的。

考虑三方 GHZ 态：

$$
|\mathrm{GHZ}_3\rangle
=\frac{|000\rangle+|111\rangle}{\sqrt2}.
$$

它具有确定性的 Pauli 关联：

$$
\begin{aligned}
XXX|\mathrm{GHZ}_3\rangle
&=|\mathrm{GHZ}_3\rangle,\\
YYX|\mathrm{GHZ}_3\rangle
&=-|\mathrm{GHZ}_3\rangle,\\
YXY|\mathrm{GHZ}_3\rangle
&=-|\mathrm{GHZ}_3\rangle,\\
XYY|\mathrm{GHZ}_3\rangle
&=-|\mathrm{GHZ}_3\rangle.
\end{aligned}
$$

这些关联的共同特征是：**每个算符串包含偶数个 $Y$，其余位置为 $X$。**

对于一般 $n$ 方 GHZ 态，所有包含偶数个 $Y$ 的 $X/Y$ 算符串同样具有确定性本征值：

$$
S_T|\mathrm{GHZ}_n\rangle
=(-1)^{|T|/2}|\mathrm{GHZ}_n\rangle,
$$

其中 $T$ 是 $Y$ 所在位置的集合，且 $|T|$ 为偶数。

这样的算符串共有

$$
\sum_{\substack{k=0\\k\ \mathrm{even}}}^n
\binom nk
=2^{n-1}
$$

个。

这就解释了作者为什么选择 $2^{n-1}$ 个关联项，以及为什么 $g_j$ 只包含偶数个输入变量。

进一步地，作者选择边缘测量

$$
A_{i,0}=\frac{X+Y}{\sqrt2},
\qquad
A_{i,1}=\frac{X-Y}{\sqrt2}.
$$

因此

$$
A_{i,+}=\frac X{\sqrt2},
\qquad
A_{i,-}=\frac Y{\sqrt2}.
$$

例如，

$$
g_2=x_1+x_2
$$

对应的关联项为

$$
I_2=
\left\langle
A_{1,-}A_{2,-}A_{3,+}B^2
\right\rangle.
$$

这正好提取 $YYX$ 的关联结构。

同理：

$$
g_1=0\longrightarrow XXX,
$$

$$
g_3=x_1+x_3\longrightarrow YXY,
$$

$$
g_4=x_2+x_3\longrightarrow XYY.
$$

**Bob 的输出赋值也根据这些 GHZ 关联确定。**

例如，三方广义 Bell 测量的基态为

$$
|\psi_{ijk}\rangle
=(Z^i\otimes X^j\otimes X^k)
|\mathrm{GHZ}_3\rangle.
$$

不同测量结果对应不同的 Pauli 算符串本征值，因此作者将原始测量结果 $(i,j,k)$ 映射为

$$
\begin{aligned}
b^1&=i,\\
b^2&=i\oplus j\oplus1,\\
b^3&=i\oplus k\oplus1,\\
b^4&=i\oplus j\oplus k\oplus1.
\end{aligned}
$$

这些赋值使得有效观测量 $B^j$ 对应相应的 Pauli 算符串。

因此，第二类关联项的选择不是任意的，而是由 GHZ 态的确定性测量关联同时指导了：

- 选择哪些联合关联项；
- 每个关联项采用什么输入符号；
- Bob 的测量结果如何进行赋值。

**我的理解：** 作者从希望通过 entanglement swapping 获得的 GHZ 型关联出发，利用其 Stabilizer 结构选择具有特定符号模式的关联项，再研究这些关联项在一般经典网络模型下受到什么限制。

这里 GHZ 态指导的是关联项的构造，而不是经典不等式成立的前提。

#### ② 如何组合关联项？

**第一类：**

作者采用

$$
\mathcal S
=|I|^{1/n}+|J|^{1/n}.
$$

为什么是 $1/n$ 次幂？

由于网络存在 $n$ 个独立源，可以证明两个关联项分别满足

$$
|I|\le\prod_{i=1}^n U_i,
\qquad
|J|\le\prod_{i=1}^n V_i,
$$

其中 $U_i,V_i$ 是第 $i$ 个源对应的非负参数。

如果采用 $1/n$ 次幂，就可以利用 Hölder 不等式：

$$
\begin{aligned}
&\left(\prod_i U_i\right)^{1/n}
+\left(\prod_i V_i\right)^{1/n}\\
&\le
\left[\prod_i(U_i+V_i)\right]^{1/n}.
\end{aligned}
$$

因此，$1/n$ 次幂使 $n$ 个独立源的乘积结构能够转化为逐源约束。

这与 bilocal 场景采用平方根的数学作用一致。

**第二类：**

作者采用

$$
\mathcal S
=\sum_{j=1}^{2^{n-1}}|I_j|^{1/n}.
$$

这里有两个需要理解的地方。

首先，**关联项数量 $2^{n-1}$ 来自 GHZ 确定性关联中偶数个 $Y$ 的结构**。

其次，每项仍采用 $1/n$ 次幂，因为每个关联项都受到 $n$ 个独立源形成的乘积约束。

这些关联项还具有一个特殊的组合性质：

对于任意边缘方 $i$，在全部 $2^{n-1}$ 个符号函数中，

$$
2^{n-2}
$$

个函数包含 $x_i$，另外 $2^{n-2}$ 个函数不包含 $x_i$。

因此，所有关联项进行 Hölder 合并后，每个源对应的对称和反对称响应恰好以相同次数出现。

**我的理解：** 第二类不等式的关联项数量及符号模式由 GHZ 结构启发，而 $1/n$ 次幂与整体求和使这些关联项能够统一利用独立源约束。偶数子集的均衡性则进一步决定了经典界的形式。

#### ③ 如何利用网络约束？

这里的经典证明不依赖 GHZ 态，而是对所有满足 $n$-local 模型的经典关联成立。

首先，定义第 $i$ 个边缘方的经典条件平均响应：

$$
a_{i,x}(\lambda_i)
=\sum_{a_i}(-1)^{a_i}
p(a_i|x,\lambda_i).
$$

其中

$$
|a_{i,x}(\lambda_i)|\le1.
$$

定义对称和反对称响应：

$$
u_i(\lambda_i)
=\frac{a_{i,0}+a_{i,1}}2,
$$

$$
v_i(\lambda_i)
=\frac{a_{i,0}-a_{i,1}}2.
$$

对于任意经典二值响应，

$$
|u_i|+|v_i|
=\max\{|a_{i,0}|,|a_{i,1}|\}
\le1.
$$

再定义

$$
U_i=\int d\lambda_i\,
p_i(\lambda_i)|u_i(\lambda_i)|,
$$

$$
V_i=\int d\lambda_i\,
p_i(\lambda_i)|v_i(\lambda_i)|.
$$

因此

$$
U_i+V_i\le1.
$$

**第一类经典界**

由于 Bob 的条件平均响应绝对值不超过 1，并且各源独立，

$$
|I|\le\prod_{i=1}^n U_i,
\qquad
|J|\le\prod_{i=1}^n V_i.
$$

利用 Hölder 不等式：

$$
\begin{aligned}
|I|^{1/n}+|J|^{1/n}
&\le
\left(\prod_iU_i\right)^{1/n}
+\left(\prod_iV_i\right)^{1/n}\\
&\le
\left[\prod_i(U_i+V_i)\right]^{1/n}\\
&\le1.
\end{aligned}
$$

由此得到第一类 $n$-local 不等式。

**第二类经典界**

将符号函数 $g_j$ 对应的偶数指标集合记为 $T_j$。

根据 $g_j$ 是否包含 $x_i$，每个关联项可以写成对称或反对称响应的乘积，因此

$$
|I_j|
\le
\prod_{i\notin T_j}U_i
\prod_{i\in T_j}V_i.
$$

令

$$
w_{ij}=
\begin{cases}
U_i,&i\notin T_j,\\
V_i,&i\in T_j.
\end{cases}
$$

则

$$
|I_j|\le\prod_iw_{ij}.
$$

对所有关联项求和并利用 Hölder：

$$
\begin{aligned}
\sum_j|I_j|^{1/n}
&\le
\sum_j\left(\prod_iw_{ij}\right)^{1/n}\\
&\le
\prod_i\left(\sum_jw_{ij}\right)^{1/n}.
\end{aligned}
$$

关键在于偶数指标集合的组合性质。

对于每个 $i$，$U_i$ 和 $V_i$ 各出现 $2^{n-2}$ 次，因此

$$
\begin{aligned}
\sum_jw_{ij}
&=2^{n-2}U_i+2^{n-2}V_i\\
&=2^{n-2}(U_i+V_i)\\
&\le2^{n-2}.
\end{aligned}
$$

于是

$$
\begin{aligned}
\sum_j|I_j|^{1/n}
&\le
\prod_i\left(2^{n-2}\right)^{1/n}\\
&=2^{n-2}.
\end{aligned}
$$

得到

$$
\boxed{
\sum_j|I_j|^{1/n}\le2^{n-2}.
}
$$

这里实际上同时利用了三种数学结构：

- **源独立性：** 将每个关联项分解为不同源参数的乘积上界。
- **端点响应约束：** 每个源对应的对称和反对称参数满足 $U_i+V_i\le1$。
- **关联项的组合结构：** 偶数子集保证每个 $U_i,V_i$ 在全部关联项中出现相同次数，从而可以通过 Hölder 求界。

因此，GHZ 结构虽然指导了关联项的选择，但上述经典界是针对一般 $n$-local 模型得到的，不需要假设任何量子态或量子测量。

#### ④ 如何证明构造有效？

**第一类：经典界紧性**

作者构造了显式 $n$-local 策略：

$$
a_i=\lambda_i\oplus\mu_i x_i,
\qquad
b=\bigoplus_i\lambda_i,
$$

其中 $\lambda_i$ 独立均匀随机，$\mu_i$ 也相互独立，满足

$$
p(\mu_i=0)=r.
$$

由此得到

$$
I=r^n,
\qquad
J=(1-r)^n.
$$

因此

$$
I^{1/n}+J^{1/n}
=r+(1-r)=1.
$$

说明经典界可以饱和，并且通过改变 $r$ 可以达到相应投影空间中的整条正象限边界；通过输出重标记还可以得到其他符号的边界。

**第一类：量子违反**

作者考虑每条链路分发最大纠缠 singlet 态，边缘方选择

$$
A_{i,0}=\frac{X+Z}{\sqrt2},
\qquad
A_{i,1}=\frac{X-Z}{\sqrt2}.
$$

Bob 对所有接收到的 qubit 测量 $X$ 或 $Z$，并对结果进行 parity 后处理。

得到

$$
|I|=|J|=2^{-n/2}.
$$

因此

$$
\mathcal S_Q
=2(2^{-n/2})^{1/n}
=\sqrt2>1.
$$

这一策略不需要 Bob 进行 entanglement swapping。实际上，它相当于将每条链路的 CHSH 关联通过 Bob 的 parity 处理组合起来。

原文证明了在所考虑的最大纠缠态与边缘测量限制下，这一违反是最优的，但没有由此建立任意量子态和测量下的全局量子紧界。

**第二类：经典界紧性**

作者证明了经典上界在对称方向

$$
I_1=I_2=\cdots=I_{2^{n-1}}
$$

可以饱和。

通过独立随机隐变量和适当的确定性响应，可以得到

$$
I_j=\frac1{2^n},
\qquad \forall j.
$$

因此

$$
\begin{aligned}
\sum_j|I_j|^{1/n}
&=2^{n-1}\left(\frac1{2^n}\right)^{1/n}\\
&=2^{n-2}.
\end{aligned}
$$

说明经典界是可达的。

不过，作者并没有证明在任意关联方向上都能够达到相应边界。

**第二类：量子违反**

每个源分发最大纠缠态

$$
|\Phi^+\rangle
=\frac{|00\rangle+|11\rangle}{\sqrt2}.
$$

Bob 进行广义 Bell 测量，通过 entanglement swapping 将边缘方投影到 GHZ 基对应的态。

Bob 的每个有效二值观测 $B^j$ 对应一个包含偶数个 $Y$ 的 Pauli 算符串 $S_j$。

边缘方采用

$$
A_{i,0}=\frac{X+Y}{\sqrt2},
\qquad
A_{i,1}=\frac{X-Y}{\sqrt2}.
$$

由此得到

$$
I_j
=\frac{1}{2^n\sqrt{2^n}}
\operatorname{tr}(S_j^2)
=2^{-n/2}.
$$

所以

$$
\begin{aligned}
\mathcal S_Q
&=\sum_{j=1}^{2^{n-1}}|I_j|^{1/n}\\
&=2^{n-1}\frac1{\sqrt2}\\
&=2^{n-2}\sqrt2\\
&>2^{n-2}.
\end{aligned}
$$

对任意 $n$ 均可实现量子违反，违反值与经典界之比为 $\sqrt2$。

但这一结果是显式量子策略所达到的违反值，并不等同于无条件的全局量子紧界。

**噪声检测能力**

作者进一步考虑每条链路分发 Werner 态，其可见度为 $v_i$。

记

$$
V=\prod_{i=1}^n v_i.
$$

对于上述两类量子策略，违反值相对于各自经典界的比值均为

$$
\sqrt2\,V^{1/n}.
$$

因此违反条件为

$$
\boxed{V>2^{-n/2}.}
$$

若各链路具有相同可见度 $v$，则

$$
\boxed{v>\frac1{\sqrt2}.}
$$

这说明在作者研究的量子策略中，增加独立源的数量并没有降低每条链路所需的临界可见度。

第一类构造可以通过 Bob 的局域测量与后处理实现违反；第二类则通过广义 Bell 测量和 GHZ 型 entanglement swapping 实现违反。

两类不等式具有不同的测量实现方式，但在文中考虑的 Werner 噪声模型和量子策略下，具有相同的归一化违反阈值。

### 构造思想总结

这篇论文的两类不等式具有不同的构造动机。

**第一类：** 从已有 bilocal 不等式的关联结构出发，将对称和反对称关联推广到 $n$ 个独立源，再利用 $1/n$ 次幂与 Hölder 不等式建立紧 $n$-local 约束。

**第二类：** 从 GHZ paradox 和 Stabilizer 关联出发，根据具有偶数个 $Y$ 的确定性关联选择 $2^{n-1}$ 个关联项，并据此设计 Bob 的输出赋值；随后利用独立源结构、经典局域响应约束以及关联项的组合性质推导 $n$-local 界，最后通过广义 Bell 测量展示量子违反。

最值得注意的是，**第二类不等式的关联项选择受到目标量子关联的启发，但经典界的证明完全基于一般经典网络模型。**

同时，关联项的符号模式不仅对应 GHZ 的测量关联，也具有使经典证明成立的组合性质：每个端点的对称和反对称响应在全部关联项中出现相同次数。

这篇论文因而展示了两种构造路线：一种是推广已有网络不等式的关联结构，另一种是从目标量子态的特殊测量关联出发，设计新的网络关联组合。